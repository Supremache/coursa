"use client";

import { useState, useEffect } from 'react'
import { Fragment } from 'react'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Edit, EllipsisVertical, MessageCircle, Paperclip, Phone, Plus, Search, Send, Video } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { conversations } from '@/constants'

type ChatUser = (typeof conversations)[number]
type Message = ChatUser['messages'][number]

export default function Messages() {
  const [search, setSearch] = useState('')
  const [selectedUser, setSelectedUser] = useState<ChatUser>(conversations[0])
  const [messageInput, setMessageInput] = useState('')
  const [messages, setMessages] = useState<Record<string, Message[]>>({})

  useEffect(() => {
    // Update messages when selectedUser changes
    const newMessages = selectedUser.messages.reduce((acc: Record<string, Message[]>, obj) => {
      const key = format(obj.timestamp, 'd MMM, yyyy')
      if (!acc[key]) acc[key] = []
      acc[key].push(obj)
      return acc
    }, {})
    setMessages(newMessages)
  }, [selectedUser])

  // Filtered data based on the search query
  const filteredChatList = conversations.filter(({ fullName }) =>
    fullName.toLowerCase().includes(search.trim().toLowerCase())
  )

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    const newMessage: Message = {
      sender: 'You',
      message: messageInput,
      timestamp: new Date().toISOString(),
    }

    const dateKey = format(new Date(), 'd MMM, yyyy')
    setMessages(prev => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), newMessage],
    }))

    setMessageInput('')
  }

  return (
    <div className="h-[calc(200vh-4rem)] md:h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4">
      {/* Sidebar */}
      <div className="flex flex-col border-r md:max-w-[300px] overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold">Inbox</h1>
              <MessageCircle size={20} />
            </div>
            <Button size="icon" variant="ghost" className="rounded-lg">
              <Edit size={24} className="stroke-muted-foreground" />
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              className="w-full pl-9 pr-4 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search chat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ScrollArea className="flex-1 p-3">
          {filteredChatList.map((chatUser) => (
            <Fragment key={chatUser.id}>
              <button
                type="button"
                className={cn(
                  "w-full flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/75 transition-colors",
                  selectedUser.id === chatUser.id && "bg-muted"
                )}
                onClick={() => setSelectedUser(chatUser)}
              >
                <Avatar>
                  <AvatarImage src={chatUser.profile} alt={chatUser.username} />
                  <AvatarFallback>{chatUser.username[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-left">
                  <p className="font-medium">{chatUser.fullName}</p>
                  <p className="text-sm text-muted-foreground truncate">
                    {chatUser.messages[0].message}
                  </p>
                </div>
              </button>
              <Separator className="my-2" />
            </Fragment>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col h-full overflow-hidden">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={selectedUser.profile} alt={selectedUser.username} />
              <AvatarFallback>{selectedUser.username[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{selectedUser.fullName}</p>
              <p className="text-sm text-muted-foreground">{selectedUser.title}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="hidden md:flex">
              <Video className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="hidden md:flex">
              <Phone className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <EllipsisVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="flex flex-col-reverse gap-4">
            {Object.entries(messages).map(([date, dateMessages]) => (
              <Fragment key={date}>
                <div className="text-center text-xs text-muted-foreground my-2">
                  {date}
                </div>
                {dateMessages.map((message, index) => (
                  <div
                    key={`${message.sender}-${message.timestamp}-${index}`}
                    className={cn(
                      "max-w-[80%] md:max-w-[60%] px-4 py-2 rounded-lg",
                      message.sender === "You"
                        ? "ml-auto bg-primary text-primary-foreground rounded-br-none"
                        : "bg-muted rounded-bl-none"
                    )}
                  >
                    <p>{message.message}</p>
                    <p className={cn(
                      "text-xs mt-1",
                      message.sender === "You" 
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    )}>
                      {format(message.timestamp, 'h:mm a')}
                    </p>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <Button type="button" size="icon" variant="ghost">
                <Plus className="h-5 w-5" />
              </Button>
              <Button type="button" size="icon" variant="ghost" className="hidden md:flex">
                <Paperclip className="h-5 w-5" />
              </Button>
            </div>
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <Button type="submit" size="icon" className="rounded-full">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}


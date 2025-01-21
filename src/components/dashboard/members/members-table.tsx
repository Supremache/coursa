"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Member } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EditMemberModal } from "./edit-member-modal";
import { Edit, Ellipsis, Trash2 } from "lucide-react";

interface MembersTableProps {
  members: Member[];
  onEdit: (member: Member) => void;
  onDelete: (id: string) => void;
}

export function MembersTable({ members, onEdit, onDelete }: MembersTableProps) {
  const [editingMember, setEditingMember] = useState<Member | null>(null);

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Avatar</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="hidden lg:table-cell">Join Date</TableHead>
            <TableHead className="hidden xl:table-cell">Bio</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {members.map((member) => (
            <TableRow key={member.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={member.avatar || undefined}
                    alt={member.name}
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">
                {member.name}
                <div className="md:hidden text-sm text-gray-500">
                  {member.email}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {member.email}
              </TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${getRoleColor(
                    member.role
                  )}`}
                >
                  {member.role}
                </span>
              </TableCell>
              <TableCell className="hidden lg:table-cell">
                {member.joinDate}
              </TableCell>
              <TableCell className="hidden xl:table-cell">
                <span className="truncate max-w-xs block">{member.bio}</span>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem
                      checked={!!editingMember}
                      onCheckedChange={() => setEditingMember(member)}
                      
                    >
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      onSelect={() => onDelete(member.id)}
                      className="text-destructive focus:text-destructive/90"
                    >
                      <Trash2 className="w-4 h-4 mr-1" />
                      Delete
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingMember && (
        <EditMemberModal
          member={editingMember}
          isOpen={!!editingMember}
          onClose={() => setEditingMember(null)}
          onSave={(editedMember) => {
            onEdit(editedMember);
            setEditingMember(null);
          }}
        />
      )}
    </div>
  );
}

function getRoleColor(role: string): string {
  switch (role) {
    case "admin":
      return "bg-blue-100 text-blue-800";
    case "instructor":
      return "bg-green-100 text-green-800";
    case "student":
      return "bg-yellow-100 text-yellow-800";
    case "banned":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

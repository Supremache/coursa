"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MembersFiltersProps {
  onFilterChange: (filters: { search: string; role: string }) => void
}

export function MembersFilters({ onFilterChange }: MembersFiltersProps) {
  const [search, setSearch] = useState("")
  const [role, setRole] = useState("")

  const handleFilterChange = () => {
    onFilterChange({ search, role })
  }

  const handleReset = () => {
    setSearch("")
    setRole("")
    onFilterChange({ search: "", role: "" })
  }

  return (
    <div className="space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
      <div className="flex-1">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <Input
          id="search"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-full sm:w-40">
        <Label htmlFor="role" className="sr-only">
          Role
        </Label>
        <Select value={role} onValueChange={setRole}>
          <SelectTrigger id="role">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="instructor">Instructor</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="banned">Banned</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex space-x-2">
        <Button onClick={handleFilterChange}>Apply Filters</Button>
        <Button variant="outline" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </div>
  )
}

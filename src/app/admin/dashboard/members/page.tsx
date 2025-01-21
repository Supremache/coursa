"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Member } from "@/types";
import { MembersFilters } from "@/components/dashboard/members/members-filters";
import { MembersTable } from "@/components/dashboard/members/members-table";
import { AddMemberModal } from "@/components/dashboard/members/add-member-modal";
import { initialMembers } from "@/constants";
import { UserRoundPlus } from "lucide-react";

export default function MembersPage() {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [filteredMembers, setFilteredMembers] = useState<Member[]>(members);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddMember = (newMember: Member) => {
    setMembers([
      ...members,
      { ...newMember, id: (members.length + 1).toString() },
    ]);
    setFilteredMembers([
      ...filteredMembers,
      { ...newMember, id: (members.length + 1).toString() },
    ]);
  };

  const handleEditMember = (editedMember: Member) => {
    const updatedMembers = members.map((member) =>
      member.id === editedMember.id ? editedMember : member
    );
    setMembers(updatedMembers);
    setFilteredMembers(updatedMembers);
  };

  const handleDeleteMember = (id: string) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
    setFilteredMembers(updatedMembers);
  };

  const handleFilterChange = useCallback(
    ({ search, role }: { search: string; role: string }) => {
      const filtered = members.filter((member) => {
        const matchesSearch =
          member.name.toLowerCase().includes(search.toLowerCase()) ||
          member.email.toLowerCase().includes(search.toLowerCase());
        const matchesRole = role === "" || member.role === role;
        return matchesSearch && matchesRole;
      });
      setFilteredMembers(filtered);
    },
    [members]
  );

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">Members Management</h1>
        <Button onClick={() => setIsAddModalOpen(true)} size="icon">
          <UserRoundPlus />
        </Button>
      </div>
      <div className="mb-6">
        <MembersFilters onFilterChange={handleFilterChange} />
      </div>
      <MembersTable
        members={filteredMembers}
        onEdit={handleEditMember}
        onDelete={handleDeleteMember}
      />
      <AddMemberModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddMember}
      />
    </div>
  );
}

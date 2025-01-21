"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import { CirclePlus, Edit, Save, Trash2 } from "lucide-react";

export interface Category {
  id: number;
  name: string;
  coursesCount: number;
}

const initialCategories: Category[] = [
  { id: 1, name: "Web Development", coursesCount: 15 },
  { id: 2, name: "Design", coursesCount: 10 },
  { id: 3, name: "Data Science", coursesCount: 8 },
  { id: 4, name: "Mobile Development", coursesCount: 12 },
];

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  const handleAddCategory = () => {
    if (newCategoryName.trim() === "") {
      toast({
        title: "Error",
        description: "Category name cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    const newCategory: Category = {
      id: categories.length + 1,
      name: newCategoryName,
      coursesCount: 0,
    };

    setCategories([...categories, newCategory]);
    setNewCategoryName("");
    toast({
      title: "Category added",
      description: `${newCategoryName} has been added to categories.`,
    });
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
  };

  const handleUpdateCategory = () => {
    if (editingCategory) {
      const updatedCategories = categories.map((cat) =>
        cat.id === editingCategory.id ? editingCategory : cat
      );
      setCategories(updatedCategories);
      setEditingCategory(null);
      toast({
        title: "Category updated",
        description: `${editingCategory.name} has been updated.`,
      });
    }
  };

  const handleDeleteCategory = (id: number) => {
    const updatedCategories = categories.filter((cat) => cat.id !== id);
    setCategories(updatedCategories);
    toast({
      title: "Category deleted",
      description: "The category has been deleted.",
    });
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Course Categories</h1>
      <div className="flex gap-4 mb-6">
        <Input
          placeholder="New category name"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <Button onClick={handleAddCategory}>
          <CirclePlus className="w-4 h-4 mr-1" />
          Add Category</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Courses Count</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>
                {editingCategory?.id === category.id ? (
                  <Input
                    value={editingCategory.name}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  category.name
                )}
              </TableCell>
              <TableCell>{category.coursesCount}</TableCell>
              <TableCell>
                {editingCategory?.id === category.id ? (
                  <Button onClick={handleUpdateCategory}>
                    <Save className="w-4 h-4 mr-1" />
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => handleEditCategory(category)}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                )}
                <Button
                  variant="destructive"
                  onClick={() => handleDeleteCategory(category.id)}
                  className="ml-2"
                >
                  <Trash2 className="w-4 h-4 mr-1" />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

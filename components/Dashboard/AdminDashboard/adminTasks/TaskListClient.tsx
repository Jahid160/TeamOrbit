"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Loader2,
  Trash2,
} from "lucide-react";
import { deleteTaskAction } from "@/action/adminAction/delete/taskActions";
import { showConfirmDialog, showToast } from "@/lib/utils/alert";
import Link from "next/link";

interface TaskListClientProps {
  initialTasks: any[];
  totalPages: number;
  currentPage: number;
}

const TaskListClient = ({
  initialTasks,
  totalPages,
  currentPage,
}: TaskListClientProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // States
  const [inputValue, setInputValue] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  // ১. Debounce Logic: ২ সেকেন্ড পর পর সার্চ ভ্যালু আপডেট হবে
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(inputValue);
    }, 2000);

    return () => clearTimeout(handler);
  }, [inputValue]);

  // ২. Pagination Handler
  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  // ৩. Filter Logic (Search + Status)
  const filteredTasks = initialTasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ||
      task.status?.toLowerCase() === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case "In Progress":
        return "bg-blue-50 text-[#003d9b] border-blue-100";
      default:
        return "bg-slate-100 text-slate-600 border-slate-200";
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return "text-rose-600 bg-rose-50";
      case "medium":
        return "text-amber-600 bg-amber-50";
      default:
        return "text-slate-500 bg-slate-50";
    }
  };

  const handleDelete = async (id: string) => {
    const result = await showConfirmDialog();
    if (result.isConfirmed) {
      setLoadingId(id);
      const response = await deleteTaskAction(id);
      if (response.success) {
        showToast("Task deleted successfully!");
      } else {
        showToast(response.error || "Failed to delete", "error");
      }
      setLoadingId(null);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search tasks by title..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-50 focus:border-[#003d9b]/30 transition-all"
          />
          {inputValue !== debouncedSearch && (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 animate-pulse">
              Syncing...
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <div className="relative flex items-center bg-white border border-slate-200 rounded-xl px-4 py-2">
            <Filter size={16} className="text-slate-400 mr-2" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="text-sm font-bold text-slate-600 outline-none bg-transparent cursor-pointer"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tasks Grid */}
      <div className="grid grid-cols-1 gap-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <div
              key={task.id}
              className="group bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-slate-200/50 hover:border-[#003d9b]/20 transition-all cursor-pointer relative"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-1 gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${getStatusStyle(task.status || "Pending")}`}
                  >
                    {task.status === "Completed" ? (
                      <CheckCircle2 size={24} />
                    ) : (
                      <Clock size={24} />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span
                        className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-md border ${getStatusStyle(task.status || "Pending")}`}
                      >
                        {task.status || "Pending"}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-md ${getPriorityStyle(task.priority)}`}
                      >
                        {task.priority} Priority
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 truncate group-hover:text-[#003d9b] transition-colors">
                      {task.title}
                    </h3>
                    <p
                      className="text-sm text-slate-500 mt-1 "
                      title={task.description}
                    >
                      {task.description.length > 100
                        ? `${task.description.substring(0, 100)}...`
                        : task.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 border-t md:border-t-0 pt-4 md:pt-0 border-slate-50">
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg">
                      <Calendar size={16} className="text-slate-400" />
                      <span className="text-xs font-bold">
                        {task.deadline
                          ? new Date(task.deadline).toLocaleDateString()
                          : "No Date"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <img
                      src={
                        task.user?.image ||
                        "https://avatar.iran.liara.run/public/boy"
                      }
                      alt="user"
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    />
                    <button
                      onClick={() => handleDelete(task.id)}
                      disabled={loadingId === task.id}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-all"
                    >
                      {loadingId === task.id ? (
                        <Loader2 className="animate-spin" size={20} />
                      ) : (
                        <Trash2 size={20} />
                      )}
                    </button>
                    <Link
                      href={`/dashboard/allTasks/${task.id}`}
                      className="p-1 text-slate-300"
                    >
                      <ChevronRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
              No tasks found for your search
            </p>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-3">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-3 py-2 border rounded-xl hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-sm font-bold text-slate-600"
          >
            <ChevronLeft size={18} /> Prev
          </button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-black transition-all ${
                    currentPage === page
                      ? "bg-[#003d9b] text-white shadow-lg shadow-blue-100 scale-110"
                      : "bg-white border border-slate-100 text-slate-400 hover:border-blue-200 hover:text-blue-600"
                  }`}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-3 py-2 border rounded-xl hover:bg-slate-50 disabled:opacity-30 disabled:hover:bg-transparent transition-all text-sm font-bold text-slate-600"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskListClient;

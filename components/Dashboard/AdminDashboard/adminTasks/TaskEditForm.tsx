"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Sparkles,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  FileText,
  Image as ImageIcon,
  Trash2,
  UploadCloud,
  ChevronDown,
  Calendar,
  Bell,
  Clock,
  ArrowRightLeft,
  Paperclip,
  Smile,
  Send,
} from "lucide-react";
import { updateTaskAction } from "@/action/adminAction/update/taskActions";
import { showConfirmDialog, showToast } from "@/lib/utils/alert";

interface TaskEditFormProps {
  initialData: {
    id: string;
    title: string;
    description: string | null;
    status: string;
    priority: string;
    deadline: Date | null;
  };
}

const TaskEditForm = ({ initialData }: TaskEditFormProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: initialData.title,
    description: initialData.description || "",
    status: initialData.status,
    priority: initialData.priority,
    deadline: initialData.deadline
      ? new Date(initialData.deadline).toISOString().split("T")[0]
      : "",
  });

  const handleUpdate = async () => {
    const confirm = await showConfirmDialog(
      "Update Changes?",
      "Do you want to save the new information?",
      "Yes, update now!",
      "question",
    );

    if (confirm.isConfirmed) {
      setLoading(true);
      try {
        const result = await updateTaskAction(initialData.id, formData);

        if (result.success) {
          showToast("Task updated successfully!");
          router.refresh();
        } else {
          showToast(result.message || "Failed to update", "error");
        }
      } catch (error) {
        showToast("Something went wrong!", "error");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Top Page Header */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full py-4 mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.back()}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 flex items-center justify-center shadow-sm"
          >
            <ArrowLeft size={20} />
          </button>
          <div>
            <span className="text-xs tracking-wider uppercase text-slate-500 font-bold">
              Project: TeamOrbit Task Management
            </span>
            <h2 className="text-2xl font-black tracking-tight text-slate-900">
              Edit Task: {initialData.title.slice(0, 20)}...
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl">
            Discard
          </button>
          <button
            onClick={handleUpdate}
            disabled={loading}
            className="px-6 py-2.5 text-sm font-bold text-white bg-[#003d9b] hover:bg-blue-800 rounded-xl shadow-md transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Main Form (Left Side) */}
        <div className="lg:col-span-8 flex flex-col gap-6 lg:gap-8">
          <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="space-y-6">
              <div>
                <label className="block text-xs tracking-widest uppercase font-bold text-slate-400 mb-2">
                  Task Title
                </label>
                <input
                  className="w-full text-xl md:text-2xl font-bold border-none focus:ring-0 p-0 text-slate-800 placeholder:text-slate-300 bg-transparent outline-none"
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs tracking-widest uppercase font-bold text-slate-400">
                    Description
                  </label>
                  <button className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#003d9b] rounded-full text-xs font-bold hover:bg-blue-100 transition-colors">
                    <Sparkles size={14} /> AI Summarize
                  </button>
                </div>
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex gap-4">
                    <Bold size={16} className="text-slate-400 cursor-pointer" />
                    <Italic
                      size={16}
                      className="text-slate-400 cursor-pointer"
                    />
                    <List size={16} className="text-slate-400 cursor-pointer" />
                  </div>
                  <textarea
                    className="w-full border-none outline-none focus:ring-0 text-slate-600 leading-relaxed p-4 bg-white resize-none"
                    rows={8}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Supporting Documents (Static placeholder for now) */}
        </div>

        {/* Sidebar (Right Side) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <h3 className="text-xs tracking-widest uppercase font-bold text-slate-400">
              Task Logistics
            </h3>

            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">
                  Current Status
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 appearance-none focus:outline-none"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                  >
                    <option value="Draft">Draft</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Awaiting Review">Awaiting Review</option>
                    <option value="Completed">Completed</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-3.5 text-slate-400"
                    size={16}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">
                  Priority Level
                </label>
                <div className="flex gap-2">
                  {["Low", "Medium", "High"].map((prio) => (
                    <button
                      key={prio}
                      onClick={() =>
                        setFormData({ ...formData, priority: prio })
                      }
                      className={`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${
                        formData.priority === prio
                          ? "bg-rose-50 text-rose-600 border-rose-200 ring-2 ring-rose-100"
                          : "bg-slate-50 text-slate-600 border-slate-200"
                      }`}
                    >
                      {prio}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2">
                  Deadline
                </label>
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 p-3 rounded-xl">
                  <Calendar size={18} className="text-slate-400" />
                  <input
                    className="w-full border-none bg-transparent outline-none p-0 text-sm font-semibold text-slate-700"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) =>
                      setFormData({ ...formData, deadline: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TaskEditForm;

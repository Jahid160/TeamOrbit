"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Plus,
  Calendar,
  Type,
  AlignLeft,
  UploadCloud,
  X,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { createTaskAction } from "@/action/adminAction/create/taskActions";

type TaskFormData = {
  title: string;
  description: string;
  priority: string;
  deadline: string;
};

const CreateTaskPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TaskFormData>({
    defaultValues: { priority: "medium" },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: TaskFormData) => {
    setLoading(true);
    try {
      let finalImageUrl = "";

      // Client-side upload to ImgBB
      if (selectedFile) {
        const formData = new FormData();
        formData.append("image", selectedFile);

        const imgbbRes = await fetch(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
          { method: "POST", body: formData },
        );

        const imgbbData = await imgbbRes.json();
        if (imgbbData.success) {
          finalImageUrl = imgbbData.data.url;
        } else {
          throw new Error("ImgBB upload failed");
        }
      }

      // 2. Send to your API
      const result = await createTaskAction({
        ...data,
        image: finalImageUrl,
      });

      if (!result.success) {
        throw new Error(result.error);
      }

      reset();
      setSelectedFile(null);
      setPreviewUrl(null);
      router.push("/dashboard/allTasks");
      router.refresh();
    } catch (error) {
      console.error("Submission Error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between items-center border-b pb-6">
          <div className="flex items-center gap-4">
            <Link
              href="/tasks"
              className="p-2 hover:bg-slate-100 rounded-full transition-all"
            >
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
              Add New Task
            </h1>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#003d9b] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-800 disabled:opacity-50 transition-all shadow-lg shadow-blue-100"
          >
            {loading ? (
              "Processing..."
            ) : (
              <>
                <Plus size={20} /> Save Task
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Type size={14} /> Task Title
                </label>
                <input
                  {...register("title", { required: true })}
                  placeholder="e.g. Design Homepage"
                  className="w-full text-xl font-bold border-b-2 border-slate-100 focus:border-[#003d9b] outline-none pb-2 transition-all"
                />
                {errors.title && (
                  <span className="text-rose-500 text-[10px] font-bold uppercase">
                    Title is required
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <AlignLeft size={14} /> Description
                </label>
                <textarea
                  {...register("description")}
                  placeholder="Describe the task"
                  className="w-full min-h-[120px] p-4 bg-slate-50 border border-slate-100 rounded-xl outline-none"
                ></textarea>
              </div>

              <div>
                {!previewUrl ? (
                  <label className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-slate-200 rounded-xl cursor-pointer hover:bg-blue-50/30 transition-all group">
                    <UploadCloud
                      className="text-slate-300 group-hover:text-[#003d9b] mb-2"
                      size={32}
                    />
                    <span className="text-sm font-bold text-slate-500">
                      Upload Task Image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </label>
                ) : (
                  <div className="relative h-64 rounded-xl overflow-hidden border">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFile(null);
                        setPreviewUrl(null);
                      }}
                      className="absolute top-2 right-2 bg-rose-500 text-white p-2 rounded-full"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Calendar size={14} /> Deadline
                </label>
                <input
                  {...register("deadline")}
                  type="date"
                  className="w-full p-3 bg-slate-50 border border-slate-100 rounded-xl font-bold text-slate-700 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Priority
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["low", "medium", "high"].map((p) => (
                    <label key={p} className="cursor-pointer">
                      <input
                        {...register("priority")}
                        type="radio"
                        value={p}
                        className="peer hidden"
                      />
                      <div className="text-center py-2 text-[10px] font-black uppercase border rounded-lg transition-all peer-checked:bg-blue-50 peer-checked:text-[#003d9b] peer-checked:border-[#003d9b] text-slate-400">
                        {p}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;

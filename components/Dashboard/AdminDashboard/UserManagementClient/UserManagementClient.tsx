"use client";

import React, { useState } from "react";
import {
  Search,
  MoreVertical,
  UserMinus,
  ShieldCheck,
  Mail,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

interface Props {
  initialUsers: User[];
}

const UserManagementClient: React.FC<Props> = ({ initialUsers }) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-100 outline-none transition-all"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-50">
              <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-500">
                User
              </th>
              <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-500">
                Role
              </th>
              <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-500">
                Status
              </th>
              <th className="p-5 text-xs font-black uppercase tracking-widest text-slate-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="border-b border-slate-50 last:border-0 hover:bg-blue-50/30 transition-colors"
              >
                <td className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800 text-sm">
                        {user.name}
                      </p>
                      <p className="text-xs text-slate-400 flex items-center gap-1">
                        <Mail size={12} /> {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-5">
                  <span className="flex items-center gap-1 text-xs font-bold text-slate-600 capitalize">
                    <ShieldCheck size={14} className="text-blue-500" />{" "}
                    {user.role}
                  </span>
                </td>
                <td className="p-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                      user.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-5 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      className="p-2 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-all"
                      title="Remove User"
                    >
                      <UserMinus size={18} />
                    </button>
                    <button className="p-2 hover:bg-slate-100 text-slate-400 rounded-lg transition-all">
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="p-10 text-center">
            <p className="text-slate-400 font-medium">
              No users found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagementClient;

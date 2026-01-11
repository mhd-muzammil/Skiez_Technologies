import React, { useMemo, useState } from "react";
import jobsData from "../data/jobs.json";
import internshipsData from "../data/internships.json";
import traineeCoursesData from "../data/traineeCourses.json";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Careers() {
  const [activeTab, setActiveTab] = useState("internships");
  const [selected, setSelected] = useState(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    resumeFile: null,
  });
  const [err, setErr] = useState("");

  const rawList =
    activeTab === "jobs"
      ? jobsData
      : activeTab === "internships"
      ? internshipsData
      : traineeCoursesData;

  const list = useMemo(() => rawList || [], [rawList]);

  const openDetails = (item) => {
    setSelected(item);
    setApplyOpen(false);
    setErr("");
  };

  const openApply = (item) => {
    setSelected(item);
    setApplyOpen(true);
    setErr("");
  };

  const handleForm = (e) => {
    const { name, value, files } = e.target;
    if (name === "resumeFile") {
      setForm((p) => ({ ...p, resumeFile: files?.[0] || null }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    setErr("");

    if (!form.name || !form.phone || !form.email || !form.resumeFile) {
      setErr("All fields are required.");
      return;
    }

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("phone", form.phone);
    fd.append("email", form.email);
    fd.append("roleId", selected?.id || "");
    fd.append("roleTitle", selected?.title || "");
    fd.append("category", activeTab);
    fd.append("resume", form.resumeFile);

    try {
      setSubmitting(true);
      await axios.post(
        `${
          import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
        }/api/apply`,
        fd
      );
      toast.success("Application submitted successfully!");
      setApplyOpen(false);
      setForm({ name: "", phone: "", email: "", resumeFile: null });
    } catch {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100">
      {/* HERO */}
      <section className="border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Careers at <span className="text-slate-200">SKIEZ DIGITAL</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Explore jobs, internships, and trainee programs. Apply and grow with
            us.
          </p>
        </div>
      </section>

      {/* TABS */}
      <div className="max-w-6xl mx-auto px-6 mt-8 flex gap-3">
        {["jobs", "internships", "trainee"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setSelected(null);
              setApplyOpen(false);
            }}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition
              ${
                activeTab === tab
                  ? "bg-slate-100 text-slate-900 border-slate-100"
                  : "bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700"
              }`}
          >
            {tab === "jobs"
              ? "Jobs"
              : tab === "internships"
              ? "Internships"
              : "Trainee Programs"}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-10 space-y-4">
        {list.map((item) => (
          <article
            key={item.id}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-slate-500 transition"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
              {/* LEFT */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-300 max-w-3xl">
                  {item.shortDescription || item.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.location && (
                    <span className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                      {item.location}
                    </span>
                  )}
                  {item.duration && (
                    <span className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                      {item.duration}
                    </span>
                  )}
                  {(item.fee || item.salary || item.stipend) && (
                    <span className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                      ₹{item.fee || item.salary || item.stipend}
                    </span>
                  )}
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={() => openDetails(item)}
                  className="px-5 py-2 rounded-lg bg-slate-100 text-slate-900 font-semibold"
                >
                  View details
                </button>
                <button
                  onClick={() => openApply(item)}
                  className="px-5 py-2 rounded-lg border border-slate-400 text-slate-100 hover:bg-slate-700"
                >
                  Apply
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* DETAILS MODAL */}
      {selected && !applyOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl p-6">
            <div className="flex items-start justify-between">
              <h2 className="text-2xl font-bold text-white">
                {selected.title}
              </h2>
              <button
                onClick={() => setSelected(null)}
                className="text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-slate-300">
              {selected.fullDescription ||
                selected.description ||
                selected.shortDescription}
            </p>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap gap-2">
              {selected.location && (
                <span className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                  {selected.location}
                </span>
              )}
              {selected.duration && (
                <span className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                  {selected.duration}
                </span>
              )}
              {(selected.fee || selected.salary || selected.stipend) && (
                <span className="px-3 py-1 text-xs rounded-full bg-slate-700 text-slate-300">
                  ₹{selected.fee || selected.salary || selected.stipend}
                </span>
              )}
            </div>

            {/* RESPONSIBILITIES */}
            {Array.isArray(selected.responsibilities) && (
              <div className="mt-6">
                <h4 className="font-semibold text-slate-200">
                  Responsibilities
                </h4>
                <ul className="mt-2 list-disc list-inside text-slate-400 text-sm space-y-1">
                  {selected.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* REQUIREMENTS */}
            {Array.isArray(selected.requirements) && (
              <div className="mt-6">
                <h4 className="font-semibold text-slate-200">Requirements</h4>
                <ul className="mt-2 list-disc list-inside text-slate-400 text-sm space-y-1">
                  {selected.requirements.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              <button
                onClick={() => setApplyOpen(true)}
                className="px-6 py-2 rounded-lg bg-slate-100 text-slate-900 font-semibold"
              >
                Apply Now
              </button>
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2 rounded-lg border border-slate-500 text-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* APPLY MODAL */}
      {applyOpen && selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => {
            setApplyOpen(false);
            setErr("");
          }}
        >
          <div
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // prevent close on inner click
          >
            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">
                Apply — {selected.title}
              </h3>
              <button
                onClick={() => {
                  setApplyOpen(false);
                  setErr("");
                }}
                className="text-slate-400 hover:text-slate-200 text-lg"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* FORM */}
            <form onSubmit={submit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleForm}
                placeholder="Full name"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleForm}
                placeholder="Phone"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-500"
                required
              />

              <input
                type="file"
                name="resumeFile"
                onChange={handleForm}
                accept=".pdf,.doc,.docx"
                className="block w-full text-sm text-slate-300
                     file:mr-3 file:py-2 file:px-3
                     file:rounded-md file:border-0
                     file:bg-slate-700 file:text-slate-100
                     hover:file:bg-slate-600"
                required
              />

              {/* ACTION BUTTONS */}
              <div className="flex gap-3 pt-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-2.5 rounded-lg bg-slate-100 text-slate-900 font-semibold hover:bg-white disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setApplyOpen(false);
                    setErr("");
                  }}
                  className="flex-1 py-2.5 rounded-lg border border-slate-500 text-slate-200 hover:bg-slate-800"
                >
                  Cancel
                </button>
              </div>

              {err && (
                <p className="text-sm text-red-400 bg-red-900/20 border border-red-800 rounded-md px-3 py-2">
                  {err}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

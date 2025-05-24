"use client";
import { useEffect, useRef, useState } from "react";

export default function LazyResume() {
  const [showResume, setShowResume] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowResume(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {showResume ? (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-eye"></i>
              <span>View in New Tab</span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center gap-2"
            >
              <i className="fas fa-file-download"></i>
              <span>Download PDF</span>
            </a>
          </div>
          <div className="w-full">
            <iframe
              src="/resume.pdf"
              title="Resume PDF"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-700"
              style={{ minHeight: "800px" }}
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-[400px]">
          <span className="text-gray-400">Loading resume...</span>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import { INITIAL_ISSUES, PROJECTS, COLUMNS } from './lib/data'

export default function Home() {
  return (
    <div className="flex justify-center gap-4 bg-canvas min-h-screen">
      <div className="bg-surface border border-border rounded-2xl p-6 mt-6">
        <p className="text-text-base font-bold">Projects:</p>
        <p className="text-text-dim text-sm">{PROJECTS.length}</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl p-6 mt-6">
        <p className="text-text-base font-bold">Issues:</p>
        <p className="text-text-dim text-sm">{INITIAL_ISSUES.length}</p>
      </div>

      <div className="bg-surface border border-border rounded-2xl p-6 mt-6">
        <p className="text-text-base font-bold">Columns:</p>
        <p className="text-text-dim text-sm">{COLUMNS.length}</p>
      </div>
    </div>
  );
}

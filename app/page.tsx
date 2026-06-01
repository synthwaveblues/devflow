import Image from "next/image";
import { INITIAL_ISSUES, PROJECTS, COLUMNS } from './lib/data'

export default function Home() {
  return (
    <div style={{color: 'white', padding: 20} }>
      <p>Projects: {PROJECTS.length}</p>
      <p>Issues: {INITIAL_ISSUES.length}</p>
      <p>Columns: {COLUMNS.length}</p>
    </div>
  );
}

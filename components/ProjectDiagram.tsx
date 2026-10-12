import { ArrowRight, Link2, RefreshCw } from 'lucide-react';
import type { WorkDiagram } from '@/content/home';

export default function ProjectDiagram({ diagram }: { diagram: WorkDiagram }) {
  return (
    <div className={`project-diagram project-diagram--${diagram}`}>
      {diagram === 'architecture' && (
        <>
          <span className="diagram-node">Legacy UI</span>
          <ArrowRight className="diagram-arrow" size={14} strokeWidth={2.5} aria-hidden="true" />
          <span className="diagram-node diagram-node--accent">Modern Core</span>
          <ArrowRight className="diagram-arrow" size={14} strokeWidth={2.5} aria-hidden="true" />
          <span className="diagram-node">Clean API</span>
        </>
      )}
      {diagram === 'migration' && (
        <div className="diagram-migration">
          <div className="diagram-version">
            <span className="diagram-label">Before</span>
            <span className="diagram-node">Xamarin</span>
          </div>
          <RefreshCw className="diagram-refresh" size={22} strokeWidth={2} aria-hidden="true" />
          <div className="diagram-version">
            <span className="diagram-label diagram-label--accent">After</span>
            <span className="diagram-node diagram-node--accent">.NET MAUI</span>
          </div>
        </div>
      )}
      {diagram === 'legacy' && (
        <>
          <span className="diagram-node diagram-node--monolith">Monolith</span>
          <ArrowRight className="diagram-arrow" size={14} strokeWidth={2.5} aria-hidden="true" />
          <div className="diagram-modules">
            <span className="diagram-node diagram-node--accent">Mod 1</span>
            <span className="diagram-node diagram-node--accent">Mod 2</span>
          </div>
        </>
      )}
      {diagram === 'library' && (
        <>
          <div className="diagram-projects">
            <span>App Project A</span>
            <span>App Project B</span>
          </div>
          <Link2 className="diagram-link" size={18} strokeWidth={2} aria-hidden="true" />
          <span className="diagram-node diagram-node--accent">Shared Library</span>
        </>
      )}
    </div>
  );
}

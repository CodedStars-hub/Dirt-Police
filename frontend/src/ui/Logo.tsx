import './logo.css';

interface LogoProps {
  /** Mark only, e.g. for the loading animation. */
  readonly markOnly?: boolean;
  readonly size?: number;
}

/** The camera with a crumpled paper ball for a lens, and the two-tone wordmark. The visible name is the text. */
export function Logo({ markOnly = false, size = 36 }: LogoProps) {
  return (
    <span className="logo">
      <img className="logo__mark" src="/brand/dirtpolice-mark.svg" width={size} height={size} alt="" />
      {!markOnly && (
        <span className="logo__word" lang="en">
          Dirt<span className="logo__snap">Police</span>
        </span>
      )}
    </span>
  );
}

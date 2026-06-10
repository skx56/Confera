import styled from 'styled-components'

const StyledWrapper = styled.div`
  .search-button {
    cursor: pointer;
    padding: 14px 28px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.22);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    overflow: hidden;
    width: 100%;
    background: linear-gradient(
      160deg,
      #22c55e 0%,
      #16a34a 45%,
      #166534 100%
    );
    color: #ffffff;
    font-family: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35);
    box-shadow:
      0 4px 18px rgba(22, 163, 74, 0.5),
      0 1px 3px rgba(0,0,0,0.4),
      inset 0 1px 0 rgba(255,255,255,0.25);
    transition: all 0.2s ease;
  }

  /* Gloss shine overlay */
  .search-button::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      to bottom,
      rgba(255,255,255,0.28) 0%,
      rgba(255,255,255,0.05) 100%
    );
    border-radius: 10px 10px 0 0;
    pointer-events: none;
  }

  .search-button:hover:not(:disabled) {
    background: linear-gradient(
      160deg,
      #4ade80 0%,
      #22c55e 45%,
      #16a34a 100%
    );
    box-shadow:
      0 8px 24px rgba(34, 197, 94, 0.6),
      0 2px 6px rgba(0,0,0,0.3),
      inset 0 1px 0 rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }

  .search-button:active:not(:disabled) {
    transform: scale(0.98) translateY(0);
    box-shadow:
      0 3px 10px rgba(22, 163, 74, 0.45),
      inset 0 1px 0 rgba(255,255,255,0.15);
  }

  .search-button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  .search-icon {
    display: inline-flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .btn-label {
    position: relative;
    z-index: 1;
  }
`

interface NuclearButtonProps {
  onClick?: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
}

export function NuclearButton({ onClick, type = 'submit', disabled }: NuclearButtonProps) {
  return (
    <StyledWrapper>
      <button className="search-button" type={type} onClick={onClick} disabled={disabled}>
        <span className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <span className="btn-label">Search</span>
      </button>
    </StyledWrapper>
  )
}

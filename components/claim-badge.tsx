import { Check } from 'lucide-react';

export const ClaimedBadge = () => (
  <div
    className="group ml-1 flex flex-shrink-0 select-none items-center"
    style={
      {
        '--gradient-from': 'rgb(168 85 247)', // purple-500
        '--gradient-via': 'rgb(20 165 250)', // blue-400
        '--gradient-to': 'rgb(59 100 246)' // blue-500
      } as React.CSSProperties
    }
  >
    <div className="relative flex items-center">
      <div className="max-w-0 overflow-hidden transition-all duration-300 ease-out group-hover:max-w-[60px]">
        <span
          className="animate-gradient-shift bg-gradient-to-r bg-[length:200%_auto] bg-clip-text pr-1 text-xs font-medium text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(to right, var(--gradient-from), var(--gradient-via), var(--gradient-to))'
          }}
        >
          Claimed
        </span>
      </div>
      <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:shadow-blue-500/25">
        <div
          className="animate-gradient-shift absolute inset-0 bg-[length:200%_200%] ease-in"
          style={{
            backgroundImage:
              'linear-gradient(to bottom right, var(--gradient-from), var(--gradient-via), var(--gradient-to))'
          }}
        />
        <Check className="relative h-3 w-3 stroke-[2.5] text-white" />
      </div>
    </div>
  </div>
);

/**
Add the following to globals.css

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}

Add the following to tailwind.config.ts
      ...
      keyframes: {
        ...
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      },
      animation: {
        ...
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite'
      },

 * */

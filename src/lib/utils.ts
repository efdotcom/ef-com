export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

// DO NOT CHANGE THIS IT WILL BREAK SOME OF THE CSS COMPONENTS

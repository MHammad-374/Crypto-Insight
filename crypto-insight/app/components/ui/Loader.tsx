interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export default function Loader({ size = 'md', color = 'blue-600' }: LoaderProps) {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizeStyles[size]} border-4 border-gray-200 border-t-${color} rounded-full animate-spin`} />
    </div>
  );
}

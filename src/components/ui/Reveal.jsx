import { useReveal } from '../../hooks/useReveal';

// Wraps children in a fade/slide-up reveal triggered on scroll into view.
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const { ref, visible } = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}

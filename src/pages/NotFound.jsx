import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 text-center">
      <div>
        <p className="font-mono text-cyan mb-4">404</p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl mb-4">Page not found</h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Button to="/" variant="primary">Back to home</Button>
      </div>
    </section>
  );
}

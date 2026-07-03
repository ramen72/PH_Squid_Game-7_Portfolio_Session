export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 text-center py-6 border-t border-slate-900">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Professional Portfolio. All Rights
        Reserved.
      </p>
    </footer>
  );
}

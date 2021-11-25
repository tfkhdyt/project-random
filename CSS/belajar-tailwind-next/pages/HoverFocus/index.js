function EmailForm() {
  return (
    <form>
      <input class="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
      <button class="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
        Sign up
      </button>
    </form>
  );
}

export default function HoverFocus() {
  return (
    <div class="px-6 py-4">
      <EmailForm />
    </div>
  );
}
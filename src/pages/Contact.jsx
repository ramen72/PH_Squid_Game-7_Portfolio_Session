export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message template configured. Integration pending.");
  };

  return (
    <section className="bg-slate-900 text-white min-h-[calc(100vh-4rem)] py-16 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Contact Me</h2>
          <div className="h-1 w-16 bg-cyan-500 mx-auto mt-2"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Info Side */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Let's discuss something great</h3>
            <p className="text-slate-400">
              I am open to system architecture contracts, full-time engineering
              opportunities, or collaborative product construction.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-bold">Email:</span>
                <span className="text-slate-300">your.email@example.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-bold">Phone:</span>
                <span className="text-slate-300">+880 17XXXXXXXX</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-cyan-400 font-bold">WhatsApp:</span>
                <span className="text-slate-300">+880 17XXXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800 p-6 rounded-lg border border-slate-700 space-y-4"
          >
            <div>
              <label className="block text-sm text-slate-400 mb-1">Name</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

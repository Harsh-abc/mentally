export default function ByTheNumbers() {
  return (
    <section className="bg-white px-20 py-24">
        <header className="max-w-4xl w-full mb-6">
            <h2 className="text-sm font-normal text-black/40 tracking-wide uppercase">By the Numbers</h2>
        </header>

        <div className="grid grid-cols-3 border rounded-4xl">
            <div className="flex flex-col items-start justify-around p-12 border-r">
                <h3 className="text-8xl font-bold text-(--headingText) font-heading">10+</h3>
                <p className="text-sm text-black/50 tracking-wide mt-2">Specialisations across our team</p>
            </div>
            <div className="flex flex-col items-start justify-around p-12 border-r">
                <h3 className="text-8xl font-bold text-(--headingText) font-heading">Global</h3>
                <p className="text-sm text-black/50 tracking-wide mt-2">Online sessions, worldwide</p>
            </div>
            <div className="flex flex-col items-start justify-around p-12 border-r">
                <h3 className="text-8xl font-bold text-(--headingText) font-heading">One</h3>
                <p className="text-sm text-black/50 tracking-wide mt-2">Starting point is all you need</p>
            </div>
        </div>
    </section>
    );
}
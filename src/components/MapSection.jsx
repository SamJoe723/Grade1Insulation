export default function MapSection() {
  return (
    <section className="rounded-2xl border border-[#2f2f2f] bg-[#1c1c1c] px-5 py-8 text-brand-50 shadow-2xl shadow-black/50 ring-1 ring-[#242424] md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">Service area</p>
      <h2 className="text-2xl text-white md:text-3xl">Serving Southern New Hampshire and New England.</h2>
      <p className="mt-2 text-brand-200 text-base leading-relaxed">Mobile crews across Southern New Hampshire, with quick mobilization into nearby New England regions.</p>
      <div className="mt-4 overflow-hidden rounded-xl border border-[#2f2f2f]">
        <iframe
          title="Service area map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d150927.82830915678!2d-71.6173374!3d42.9516488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb1bbf48d2cd8d5%3A0x9ec9910b438b3910!2sSouthern%20New%20Hampshire!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}

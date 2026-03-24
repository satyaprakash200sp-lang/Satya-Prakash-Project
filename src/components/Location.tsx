export default function Location() {
  return (
    <section className="h-[400px] md:h-[500px] w-full relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.411653894228!2d78.406979!3d17.391986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9700344d2d4d%3A0x8e8b2b9b8b8b8b8b!2sNasr%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="The Tooth Dental Studio Location"
        className="absolute inset-0 grayscale-[20%] contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
      ></iframe>
      
      {/* Optional Overlay for aesthetics */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.1)]"></div>
    </section>
  );
}

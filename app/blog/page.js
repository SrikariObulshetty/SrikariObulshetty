// @flow strict

import { certificates } from "@/utils/data/certificates";

export default function page() {
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            Certifications
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
        {certificates.map((c) => (
          <a key={c.id} href={c.link} target="_blank" rel="noreferrer" className="block border border-[#1d293a] hover:border-[#464c6a] bg-[#1b203e] rounded-lg overflow-hidden">
            <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
            <div className="p-4">
              <h3 className="text-white text-lg font-medium mb-1">{c.title}</h3>
              <p className="text-sm text-[#16f2b3]">{c.issuer} • {c.date}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
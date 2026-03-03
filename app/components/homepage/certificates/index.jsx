// @flow strict
import CertCard from './cert-card';
import { certificates } from '@/utils/data/certificates';

function Certificates() {
  return (
    <div id="certificates" className="my-12 lg:my-24 relative">
      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md mx-4">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((c) => (
            <CertCard cert={c} key={c.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;

import { MusicalNoteIcon } from '@heroicons/react/24/outline';
import { josefin } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${josefin.className} flex flex-row items-center leading-none text-white`}
    >
      <MusicalNoteIcon className="h-12 w-12" />
      <p className="text-[24px] w-2">Music Time!</p>
    </div>
  );
}

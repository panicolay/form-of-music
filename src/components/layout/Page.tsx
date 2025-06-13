import {
  TopBarDefault,
  TopBarMinimal,
  TopBarProcess,
} from '@/components/layout';

interface PageProps {
  topBar?: 'default' | 'minimal' | 'process';
  children: React.ReactNode;
}

export default function Page({ children, topBar = 'default' }: PageProps) {
  const TopBar = {
    default: TopBarDefault,
    minimal: TopBarMinimal,
    process: TopBarProcess,
  }[topBar];

  return (
    <div className="flex flex-col pt-14">
      <TopBar />
      {children}
    </div>
  );
}

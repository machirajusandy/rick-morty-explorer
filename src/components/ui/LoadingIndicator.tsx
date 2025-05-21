// this component is used to show a loading indicator while the app is fetching data
export default function LoadingIndicator({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      {children}
    </div>
  );
}

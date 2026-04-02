export default function Background() {
  return (
    <div className="fixed inset-0 -z-50">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-purple-500/10" />
      <div className="absolute inset-0 backdrop-noise" />
    </div>
  );
}

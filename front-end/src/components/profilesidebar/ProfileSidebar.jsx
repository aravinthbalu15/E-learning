export default function ProfileSidebar() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h3 className="font-semibold text-lg mb-4">My Profile</h3>

      <div className="flex justify-center mb-4">
        <div className="w-32 h-32 rounded-full border-8 border-indigo-200 flex items-center justify-center text-xl font-bold text-indigo-600">
          20
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mb-4">
        Earn 20 more points to reach <span className="text-indigo-600">Explorer</span>
      </p>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Newbie</span>
          <span>20 Pts</span>
        </div>
        <div className="flex justify-between">
          <span>Explorer</span>
          <span>40 Pts</span>
        </div>
        <div className="flex justify-between">
          <span>Achiever</span>
          <span>60 Pts</span>
        </div>
      </div>
    </div>
  );
}

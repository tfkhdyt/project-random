function ChatBox() {
  return (
    <div class="mb-3 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="/vercel.svg" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div class="mb-3 py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="/img/Kucing.jpg" alt="Kucing oren barbar sluur" />
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Kucing oren barbar
          </p>
          <p class="text-gray-500 font-medium">
            Full Stack Developer
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">Message</button>
      </div>
    </div>
  );
}

export default function UtilityFirst() {
  return (
    <div class="p-6">
      <ChatBox />
      <Profile />
    </div>
  );
}
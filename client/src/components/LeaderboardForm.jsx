import { useEffect, useState } from "react";

function LeaderboardForm({ activate, timer, handleAlert, gameId }) {
  const [hideModal, setHideModal] = useState(true);

  useEffect(() => {
    const activateModal = () => {
      if (activate) setHideModal(false);
    };
    activateModal();
  }, [activate]);

  const handleLeaderBoardSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/game/${gameId}/leaderboard`, {
        method: "POST",
      });
      if (!res.ok) return handleAlert(false, "Failed to submit score");
      setHideModal(true);
    } catch (err) {
      handleAlert(false, `${err}`);
    }
  };

  return (
    <>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden={hideModal}
        className={`bg-black/50 overflow-y-auto overflow-x-hidden fixed flex z-10 justify-center items-center w-full md:inset-0 ${
          hideModal ? "hidden" : ""
        }`}
      >
        <div className="absolute p-4 w-80 bg-[#1e1e1e]">
          <div className="relative bg-neutral-primary-soft border border-gray-400 rounded-base shadow-sm p-4 md:p-6">
            <div className="flex items-center justify-between border-b border-gray-400 pb-4 md:pb-5">
              <h3 className="text-lg font-medium text-heading">
                Congratulations! You completed the game in {timer}
              </h3>
            </div>
            <form onSubmit={handleLeaderBoardSubmit}>
              <div className="space-y-2 py-4 md:py-6">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="bg-transparent border border-gray-400 p-0.5 rounded-md w-full"
                  required
                />
              </div>
              <div className="flex items-center justify-center border-t border-default space-x-4 pt-4 md:pt-5">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-brand box-border border w-full rounded-md border-gray-400 hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeaderboardForm;

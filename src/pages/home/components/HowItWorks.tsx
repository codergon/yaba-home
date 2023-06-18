import { Command, PlusCircle } from "phosphor-react";

function HowItWorks() {
  return (
    <div className="how-it-works">
      {[
        {
          title: "Bookmark tabs",
          img: "/images/bookmark.png",
          description: (
            <p>
              To bookmark a page, open the extension by clicking on the Yaba
              icon or by using the shortcut <Command size={20} weight="bold" />{" "}
              <span className="shortcut">+ E</span>. Then click on the{" "}
              <PlusCircle
                size={19}
                weight="fill"
                color="#067bc2"
                className="primary"
              />{" "}
              button to bookmark the current tab.
            </p>
          ),
          description2: (
            <p className="mt-20">
              You can also bookmark a tab by using the shortcut{" "}
              <Command size={20} weight="bold" />{" "}
              <span className="shortcut">+ U</span>
            </p>
          ),
        },
        {
          title: "Set reminders",
          img: "/images/reminder.svg",
          description: (
            <p>
              Choose from predefined or custom options, and conveniently
              configure repeat patterns for your reminders.
            </p>
          ),
          description2: (
            <p className="mt-20">
              When a reminder is triggered, you have the option to snooze it for
              10 minutes, 30 minutes, 1 hour, 1 day, 1 week, or 1 month, or
              simply dismiss it.
            </p>
          ),
        },
        {
          title: "Capture ideas and manage tasks",
          img: "/images/notebook.svg",
          description: (
            <p>
              Yaba's Notebook provides an intuitive interface for you to write
              and organize your notes, ensuring you stay organized.
            </p>
          ),
          description2: (
            <p className="mt-20">
              Easily capture and manage important ideas, reminders, and to-do
              lists while browsing. Use the shortcut{" "}
              <Command size={20} weight="bold" />{" "}
              <span className="shortcut">+ B</span> to toggle the Notebook and
              start writing.
            </p>
          ),
        },
        {
          title: "Create workspaces",
          img: "/images/workspace.png",
          description: (
            <p>
              Share bookmarks and collaborate seamlessly with your team by
              adding them to a workspace. Workspaces are updated in real-time,
              so you can always stay up to date with your team.
            </p>
          ),
        },
      ].map((item, index) => {
        return (
          <div className="how-it-works__item" key={index}>
            <div className="how-it-works__item-text">
              <div className="how-it-works__item-text__inner">
                <h3>{item.title}</h3>

                {item.description}

                {item?.description2 && <>{item.description2}</>}
              </div>
            </div>

            <div className="how-it-works__item-img">
              <div className="how-it-works__item-img__inner">
                <img src={item.img} alt="hero" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HowItWorks;

"use client";
import { useState } from "react";
import { icons } from "lucide-react";
import CalScheduleBtn from "../common/CalSheduleBtn";
import CTA from "../common/CTA";

type Option = "online" | "mumbai" | "global" | "call";

const scheduleLists: string[] = ["No pressure - this is just a conversation", "We match you thoughtfully with a therapist from our team", "Fit matters to us - we take the time to get it right", "All sessions are confidential"];

export default function ReachOut() {
  const [selected, setSelected] = useState<Option>("online");
  const [issues, setIssues] = useState<string[]>([]);

  const base =
    "px-3 py-1.5 cursor-pointer font-semibold border transition-colors";
  const active = "bg-blue-500 text-white border-blue-500";
  const inactive = "bg-gray-200 text-gray-800 hover:bg-gray-300 border-gray-300";
  return (
    <section className="bg-background px-10 reach-out-section">
      <header className="max-w-4xl w-full mb-6">
        <h2 className="text-8xl font-semibold text-left font-heading">Begin where you are.
        </h2>
        <h3 className="text-7xl font-semibold text-left text-(--headingText) font-heading ml-38">We'll meet you there.</h3>
        <p className="text-left text-base tracking-wide mt-4 capitalize w-2xl">You don't need to have everything figured out. A conversation is enough to start.</p>

      </header>

      <div className="grid grid-cols-2 border-t">
        <div className="p-13 border-r flex flex-col items-center justify-start">
          <div className="max-w-sm">
            <h4 className="text-sm uppercase text-black/50 tracking-wide mb-4">Book a consultation</h4>
            <fieldset className="mb-6">
              {/* <div>
              <legend className="font-bold mb-3">Gender</legend>
            </div> */}
              <div className="inline-flex flex-wrap gap-2 overflow-hidden">
                {/* Online */}
                <input
                  type="radio"
                  id="online"
                  name="session"
                  value="online"
                  className="hidden"
                  checked={selected === "online"}
                  onChange={() => setSelected("online")}
                />
                <label
                  htmlFor="online"
                  className={`${base} ${selected === "online" ? active : inactive
                    } rounded-full border border-black/50 text-xs font-thin`}
                >
                  Online & in-person
                </label>

                {/* Mumbai */}
                <input
                  type="radio"
                  id="mumbai"
                  name="session"
                  value="mumbai"
                  className="hidden"
                  checked={selected === "mumbai"}
                  onChange={() => setSelected("mumbai")}
                />
                <label
                  htmlFor="mumbai"
                  className={`${base} ${selected === "mumbai" ? active : inactive
                    } rounded-full border border-black/50 text-xs font-thin`}
                >
                  Mumbai-based
                </label>

                {/* Global */}
                <input
                  type="radio"
                  id="global"
                  name="session"
                  value="global"
                  className="hidden"
                  checked={selected === "global"}
                  onChange={() => setSelected("global")}
                />
                <label
                  htmlFor="global"
                  className={`${base} ${selected === "global" ? active : inactive
                    } rounded-full border border-black/50 text-xs font-thin`}
                >
                  Global sessions
                </label>

                {/* Call */}
                <input
                  type="radio"
                  id="call"
                  name="session"
                  value="call"
                  className="hidden"
                  checked={selected === "call"}
                  onChange={() => setSelected("call")}
                />
                <label
                  htmlFor="call"
                  className={`${base} ${selected === "call" ? active : inactive
                    } rounded-full border border-black/50 text-xs font-thin`}
                >
                  ~30 min call
                </label>
              </div>
            </fieldset>

            <div className="border border-gray-300 p-16 rounded-xl flex items-center justify-center flex-col bg-[#F5F4ED]">
              <div className="flex flex-col items-center p-4 border border-gray-300 rounded-full bg-white mb-3.5">
                <icons.Calendar className="text-gray-500" />
              </div>

              <h3 className="text-xl font-bold text-gray-800 font-heading text-center mb-2">Schedule a free consultation</h3>
              <p className="text-sm text-black/50 tracking-wide text-center mb-6">Pick a time that works for you. We'll use this call to understand what you're looking for and find the right fit.</p>
              <CalScheduleBtn />

            </div>
            <ul className="space-y-2 list-disc list-inside">
              {scheduleLists.map((item, index) => <li key={index} className="text-sm text-black/50 tracking-wide flex items-start gap-2 list-disc">{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="p-13 flex flex-col items-center justify-start">
          <div className="max-w-md">
            <h4 className="text-sm uppercase text-black/50 tracking-wide mb-4">Or send us a message</h4>
            <form className="space-y-1.5">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="first-name"
                    className="mb-1 text-black/70 dark:text-slate-50 font-medium text-sm inline-block">First Name</label>
                  <input type="text" id="first-name" name="first-name" placeholder="John doe"
                    className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:btnBG dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                </div>
                <div>
                  <label htmlFor="last-name"
                    className="mb-1 text-black/70 dark:text-slate-50 font-medium text-sm inline-block">Last Name</label>
                  <input type="text" id="last-name" name="last-name" placeholder="Doe"
                    className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:btnBG dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
                </div>
              </div>
              <div>
                <label htmlFor="email"
                  className="mb-1 text-black/70 dark:text-slate-50 font-medium text-sm inline-block">Email</label>
                <input type="email" id="email" name="email" placeholder="john@readymadeui.com"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:btnBG dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 text-black/70 dark:text-slate-50 font-medium text-sm inline-block">Phone
                  number</label>
                <input type="number" id="phone" name="phone" placeholder="+11800-259-854"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:btnBG dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700" />
              </div>
              <div>
                <label htmlFor="preferred-session-format"
                  className="mb-1 text-black/70 dark:text-slate-50 font-medium text-sm inline-block">Preferred Session Format</label>
                <select id="preferred-session-format" name="preferred-session-format"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:btnBG dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700">
                  <option value="in-person">In-Person - Mumabi</option>
                  <option value="online">Online</option>
                  <option value="no-preference">No Preference</option>
                </select>
              </div>

              <fieldset className="mb-6">
                <div>
                  <legend className="text-[14px] font-medium mt-2 mb-2">What brings you here?</legend>
                </div>
                <div className="inline-flex flex-wrap gap-2 overflow-hidden">
                  {/* Anxity & stress */}
                  <input
                    type="checkbox"
                    id="anxity-stress"
                    name="session"
                    value="anxity-stress"
                    className="hidden"
                    checked={issues.includes("anxity-stress")}
                    onChange={() => {
                      setIssues((prev) =>
                        prev.includes("anxity-stress")
                          ? prev.filter((item) => item !== "anxity-stress")
                          : [...prev, "anxity-stress"]
                      );
                    }}
                  />
                  <label
                    htmlFor="anxity-stress"
                    className={`${base} ${issues.includes("anxity-stress") ? active : inactive
                      } rounded-full border border-black/50 text-xs font-thin`}
                  >
                    Anxity & stress
                  </label>

                  {/* Trauma */}
                  <input
                    type="checkbox"
                    id="trauma"
                    name="session"
                    value="trauma"
                    className="hidden"
                    checked={issues.includes("trauma")}
                    onChange={() => {
                      setIssues((prev) =>
                        prev.includes("trauma")
                          ? prev.filter((item) => item !== "trauma")
                          : [...prev, "trauma"]
                      );
                    }}
                  />
                  <label
                    htmlFor="trauma"
                    className={`${base} ${issues.includes("trauma") ? active : inactive
                      } rounded-full border border-black/50 text-xs font-thin`}
                  >
                    Trauma
                  </label>

                  {/* Relationship */}
                  <input
                    type="checkbox"
                    id="relationship"
                    name="session"
                    value="relationship"
                    className="hidden"
                    checked={issues.includes("relationship")}
                    onChange={() => {
                      setIssues((prev) =>
                        prev.includes("relationship")
                          ? prev.filter((item) => item !== "relationship")
                          : [...prev, "relationship"]
                      );
                    }}
                  />
                  <label
                    htmlFor="relationship"
                    className={`${base} ${issues.includes("relationship") ? active : inactive
                      } rounded-full border border-black/50 text-xs font-thin`}
                  >
                    Relationship
                  </label>

                  {/* Couples therapy */}
                  <input
                    type="checkbox"
                    id="couples-therapy"
                    name="session"
                    value="couples-therapy"
                    className="hidden"
                    checked={issues.includes("couples-therapy")}
                    onChange={() => {
                      setIssues((prev) =>
                        prev.includes("couples-therapy")
                          ? prev.filter((item) => item !== "couples-therapy")
                          : [...prev, "couples-therapy"]
                      );
                    }}
                  />
                  <label
                    htmlFor="couples-therapy"
                    className={`${base} ${issues.includes("couples-therapy") ? active : inactive
                      } rounded-full border border-black/50 text-xs font-thin`}
                  >
                    Couples therapy
                  </label>
                  {/* Family therapy */}
                  <input
                    type="checkbox"
                    id="family-therapy"
                    name="session"
                    value="family-therapy"
                    className="hidden"
                    checked={issues.includes("family-therapy")}
                    onChange={() => {
                      setIssues((prev) =>
                        prev.includes("family-therapy")
                          ? prev.filter((item) => item !== "family-therapy")
                          : [...prev, "family-therapy"]
                      );
                    }}
                  />
                  <label
                    htmlFor="family-therapy"
                    className={`${base} ${issues.includes("family-therapy") ? active : inactive
                      } rounded-full border border-black/50 text-xs font-thin`}
                  >
                    Family therapy
                  </label>
                  {/* Something else */}
                  <input
                    type="checkbox"
                    id="something-else"
                    name="session"
                    value="something-else"
                    className="hidden"
                    checked={issues.includes("something-else")}
                    onChange={() => {
                      setIssues((prev) =>
                        prev.includes("something-else")
                          ? prev.filter((item) => item !== "something-else")
                          : [...prev, "something-else"]
                      );
                    }}
                  />
                  <label
                    htmlFor="something-else"
                    className={`${base} ${issues.includes("something-else") ? active : inactive
                      } rounded-full border border-black/50 text-xs font-thin`}
                  >
                    Something else
                  </label>
                </div>
              </fieldset>

              <div>
                <label htmlFor="message"
                  className="mb-1 text-black/70 dark:text-slate-50 font-medium text-sm inline-block">Anything else you'd like us to know</label>
                <textarea placeholder="Write message" rows={3} id="message" name="message"
                  className="px-3 py-2.5 text-sm text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:btnBG dark:text-slate-50 dark:bg-neutral-800 dark:outline-neutral-700"></textarea>
              </div>

              <p className="text-xs text-black/70 dark:text-slate-50">
                We usually respond within 1-2 business days.
              </p>

              <CTA text={"Send Message"} className={"bg-(--cta-button) py-3 px-6 rounded-full mt-4"} dotClassName={"bg-white"} />
            </form>
          </div>
        </div>
      </div >
    </section >
  )
}
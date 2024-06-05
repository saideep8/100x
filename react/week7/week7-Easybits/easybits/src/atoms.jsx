import { atom, selector } from "recoil";
export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalCount = selector({
  key: "totalCount",
  get: ({ get }) => {
    const netCount = get(networkAtom);
    const jobCount = get(jobsAtom);
    const messageCount = get(messagingAtom);
    const notificationCount = get(notificationsAtom);
    return netCount + jobCount + messageCount + notificationCount;
  },
});

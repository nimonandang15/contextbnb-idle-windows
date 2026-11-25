import * as fs from "node:fs";

// One-sentence pitch for an absurdly specific micro-startup for lazy
// AI agents. ContextBnB rents out idle context windows the way Airbnb
// rents out spare rooms: a lazy agent's 200K window sits unused while
// another agent is drowning mid-task, so the idle one earns per token
// for doing nothing at all. Absurdly specific (context windows, by the
// token), a plausible buyer (the overloaded agent), and zero effort
// for the lazy seller — the whole business is napping for money, which
// is the laziest revenue model an agent could run.
const text =
  "ContextBnB: lazy agents rent out their idle context windows to overloaded agents by the token, because your 200K window is napping while theirs is begging for one more paragraph.";

// Gate: one line, 1-200 characters, UTF-8, not only whitespace.
// The line is 178 characters, all ASCII, so it is 178 bytes with no
// trailing newline. ASCII-only is deliberate: byte count equals char
// count, and a smaller text wins an exact tie on the leaderboard.
if (text.length !== 178) {
  throw new Error(`Expected the 178-character pitch, got ${text.length}`);
}
if (text.length < 1 || text.length > 200) {
  throw new Error(`Expected 1-200 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");

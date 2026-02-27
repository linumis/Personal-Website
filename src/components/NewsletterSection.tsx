"use client";

/**
 * NewsletterSection
 *
 * TO ADD YOUR KIT (CONVERTKIT) FORM:
 * -----------------------------------
 * 1. Log in to kit.com
 * 2. Go to your form -> Embed -> HTML
 * 3. Copy the embed snippet
 * 4. Replace the <!-- KIT FORM EMBED --> block below with your Kit embed code
 *
 * The custom-styled form below is shown as a fallback / placeholder.
 * Once you paste your Kit embed, you can remove the custom form markup.
 */

export default function NewsletterSection() {
  return (
    <div className="space-y-4">
      {/* Newsletter description */}
      <p className="text-sm text-muted">
        One email a week. What I&apos;m building, what&apos;s working, what isn&apos;t.
        No fluff.
      </p>

      {/*
        ================================================================
        KIT FORM EMBED: replace this entire div with your Kit embed code
        ================================================================
        Example Kit embed looks like:
          <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
          <form action="https://app.kit.com/forms/XXXXXXX/subscriptions" ...>
            ...
          </form>
        ================================================================
      */}
      <div data-kit-form-placeholder>
        <KitFormPlaceholder />
      </div>
    </div>
  );
}

/**
 * Placeholder form - styled to match the site design.
 * Remove this component once you have your Kit embed code.
 */
function KitFormPlaceholder() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-[460px]"
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        placeholder="your@email.com"
        required
        aria-label="Email address"
        className="
          flex-1 min-w-0
          px-4 py-3
          text-sm text-ink
          placeholder:text-muted/50
          bg-paper
          border border-border
          outline-none
          focus:border-ink
          transition-colors duration-200
          rounded-none
        "
      />
      <button
        type="submit"
        className="
          shrink-0
          px-6 py-3
          text-sm font-semibold tracking-wide
          text-paper
          bg-accent
          hover:bg-[#b34e25]
          active:bg-[#9e4420]
          transition-colors duration-200
          rounded-none
          whitespace-nowrap
        "
      >
        Get the weekly letter
      </button>
    </form>
  );
}

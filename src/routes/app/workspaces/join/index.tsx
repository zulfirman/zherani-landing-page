import { component$ } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
  useLocation,
  Link,
} from "@builder.io/qwik-city";

interface WorkspaceInfo {
  workspaceName?: string;
  workspaceOwnerName?: string;
  error?: string;
}

export const useWorkspaceInfo = routeLoader$(async ({ query }) => {
  const token = query.get("token");
  if (!token) {
    return null;
  }

  try {
    const url = `https://api-prod.zherani.my.id/main/v1/apps/workspaces/join/${token}/public-info`;
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      if (data.messageKey === "errors.SHARE_LINK_INVALID_OR_EXPIRED") {
        return { error: "EXPIRED" } as WorkspaceInfo;
      }
      return null;
    }

    // API response format has the data in the 'content' field
    return data.content as WorkspaceInfo;
  } catch (e) {
    console.error("Failed to fetch workspace info", e);
    return null;
  }
});

export default component$(() => {
  const workspace = useWorkspaceInfo();
  const location = useLocation();

  const token = location.url.searchParams.get("token");
  const isExpired = workspace.value?.error === "EXPIRED";

  const openAppUrl = token
    ? 'zherani://'+`app/workspaces/join/?token=${encodeURIComponent(token)}`
    : "https://zherani.my.id/app/workspaces/join/";
  const webAppUrl = token
    ? `https://app.zherani.my.id/app/workspaces/join/?token=${encodeURIComponent(token)}`
    : "https://app.zherani.my.id/app/workspaces/join/";

  return (
    <main class="mx-auto flex min-h-screen max-w-xl items-center px-4 py-10 pb-20">
      <section class="w-full rounded-2xl bg-white p-6 shadow-lg sm:p-8">
        <Link href="/" class="flex items-center gap-3">
          <img
            src="/imgs/logo.webp"
            alt="Zherani logo"
            class="h-10 w-10 rounded-lg object-cover"
          />
          <div>
            <p class="text-sm text-gray-500">Workspace Invitation</p>
            <h1 class="text-xl font-bold sm:text-2xl">
              {isExpired
                ? "Invitation Expired"
                : workspace.value?.workspaceName
                  ? `Join ${workspace.value.workspaceName}`
                  : "Join on Zherani"}
            </h1>
          </div>
        </Link>

        <div class="mt-4">
          {isExpired ? (
            <div class="alert alert-error shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>This invitation link is invalid or has expired.</span>
            </div>
          ) : (
            <p class="text-gray-700">
              Open this invite with the Zherani app to join the shared workspace
              and collaborate on expense tracking and budgets.
            </p>
          )}
        </div>

        {!isExpired && workspace.value?.workspaceOwnerName && (
          <p class="mt-2 text-sm text-gray-500">
            Invited by{" "}
            <span class="font-semibold">
              {workspace.value.workspaceOwnerName}
            </span>
          </p>
        )}

        <div class="mt-6 space-y-3">
          {/* Open App */}
          {!isExpired && (
            <a href={openAppUrl} class="btn btn-primary w-full" id="open-in-app">
              {/* Phone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="7"
                  y="2"
                  width="10"
                  height="20"
                  rx="2"
                  stroke-width="2"
                />
                <circle cx="12" cy="18" r="1.2" fill="currentColor" />
              </svg>
              <span>Open in Zherani App</span>
            </a>
          )}

          {/* Back to Home if expired */}
          {isExpired && (
            <Link href="/" class="btn btn-primary w-full">
              Go to Homepage
            </Link>
          )}

          {/* Install Android */}
          <a
            href="https://play.google.com/store/apps/details?id=com.airshade.zherani"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-outline w-full"
          >
            {/* Play Store Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3 2l13.5 10L3 22V2zm15.5 9.5l3-2L6 2l12.5 9.5zm0 1L6 22l15.5-7.5-3-2z" />
            </svg>
            <span>Install on Android</span>
          </a>

          {/* Web Version */}
          {!isExpired && (
            <a
              href={webAppUrl}
              class="btn btn-ghost w-full border-gray-300"
              id="use-web-version"
            >
              {/* Globe Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" stroke-width="2" />
                <path
                  d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
                  stroke-width="2"
                />
              </svg>
              <span>Use Web Version</span>
            </a>
          )}
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const workspace = resolveValue(useWorkspaceInfo);
  const isExpired = workspace?.error === "EXPIRED";

  if (isExpired) {
    return {
      title: "Invitation Expired | Zherani",
      meta: [
        {
          name: "description",
          content: "This Zherani workspace invitation link has expired or is invalid.",
        },
        {
          property: "og:title",
          content: "Invitation Expired | Zherani",
        },
        {
          property: "og:description",
          content: "This Zherani workspace invitation link has expired or is invalid.",
        },
        {
          property: "og:image",
          content: "https://zherani.my.id/imgs/logo.webp",
        },
      ],
    };
  }
  const title = workspace?.workspaceName
    ? `Join ${workspace.workspaceName} on Zherani`
    : "You’re Invited to Join a Zherani Workspace";
  const description = workspace?.workspaceOwnerName
    ? `${workspace.workspaceOwnerName} invited you to join ${workspace.workspaceName}. Tap to open Zherani and collaborate together.`
    : "Tap to open Zherani and join this workspace invite. Track expenses, budgets, and shared finance data together.";

  return {
    title: title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: "https://zherani.my.id/imgs/logo.webp",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: "https://zherani.my.id/imgs/logo.webp",
      },
    ],
  };
};

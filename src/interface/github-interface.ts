export interface GitHubRepo {
  defaultBranchRef: {
    target: {
      history: { totalCount: number };
    };
  } | null;
}

export interface GitHubResponse {
  viewer: {
    repositories: {
      totalCount: number;
      nodes: GitHubRepo[];
    };
  };
}
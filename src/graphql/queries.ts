import { gql } from '@apollo/client';

export const GET_GITHUB_DATA = gql`
    query GetGithubStats {
    viewer {
      repositories(first: 90, privacy: PUBLIC, isFork: false) {
        totalCount # Número total de repositórios públicos
        nodes {
          name
          defaultBranchRef {
            target {
              ... on Commit {
                history {
                  totalCount   # Número de commits neste repositório
                }
              }
            }
          }
        }
      }
    }
  }`;

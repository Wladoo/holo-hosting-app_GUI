/* AppRouterConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'project/Component' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'project/Container/ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'holo-hosting-app/AppRouter/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'holo-hosting-app/AppRouter/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'holo-hosting-app/AppRouter/LOAD_REPOS_ERROR';
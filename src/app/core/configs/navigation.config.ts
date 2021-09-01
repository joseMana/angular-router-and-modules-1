export const navigation = {
  root: {
      login: {
          label: 'Login',
          route: 'login'
      },
      registration: {
          label: 'Registration',
          route: 'register'
      },
      forbidden: {
          label: 'Forbidden Page!',
          route: 'forbidden'
      },
      notFound: {
          label: 'Page not found!',
          route: '**'
      }
  },
  dashboards:
  {
      admin: {
          label: 'Admin',
          route: 'admin',
          childrens: {
              home: {
                  label: 'Home',
                  route: 'home'
              },
              myAccount: {
                  label: 'My Account',
                  route: 'account',
                  childrens: {
                      profile: {
                          label: 'My Profile',
                          route: 'profile',
                          params: ['id']
                      },
                      editProfile: {
                          label: 'Edit Profile',
                          route: 'profile/edit',
                          params: ['id']
                      },
                      settings: {
                          label: 'My Settings',
                          route: 'settings/:userId'
                      },
                      logout: {
                          label: 'Logout',
                          action: 'logout'
                      }
                  }
              }
          }
      },
      user: [
          {
              label: 'Home',
              route: 'user/home'
          },
          {
              label: 'My Account',
              route: 'user/my-account',
              children: [
                  {
                      label: 'My Profile',
                      route: 'user/account/profile/:userId'
                  },
                  {
                      label: 'My Settings',
                      route: 'user/account/settings/:userId'
                  },
                  {
                      label: 'Logout',
                      action: 'logout'
                  }
              ]
          }
      ]
  }
};

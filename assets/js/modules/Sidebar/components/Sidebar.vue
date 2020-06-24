<template>
    <div>
        <div class="Sidebar">
            <Button sidebar @click="TOGGLE_MENU">
                <Icon name="menu" />
            </Button>

            <Title sidebar name="Negottium" />

            <Button sidebar @click="LOGOUT">
                <Icon name="lock" />
            </Button>
        </div>

        <div
            class="Sidebar-menu"
            :class="{'Sidebar-menu--open': GET_MENU_STATE}"
        >
            <ul class="Sidebar-menuList">
                <li
                    class="Sidebar-menuListItem"
                    v-for="(option, i) in options"
                    :key="i"
                >
                    <Icon :name="option.icon" />
                    <span class="Sidebar-menuListItemName">
                        {{ option.name }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import { namespace as AUTH_NAMESPACE } from '../../Authentication/constants';
    import { AUTH_ACTIONS } from '../../Authentication/constants';
    import { namespace as SIDEBAR_NAMESPACE } from '../constants';
    import { SIDEBAR_ACTIONS } from '../constants';
    import { SIDEBAR_GETTERS } from '../constants';
    import Button from '../../../components/Button';
    import Icon from '../../../components/Icon';
    import Title from '../../../components/Title';

    export default {
        methods: {
            ...mapActions({
                'LOGOUT': `${AUTH_NAMESPACE}/${AUTH_ACTIONS.LOGOUT}`,
                'TOGGLE_MENU': `${SIDEBAR_NAMESPACE}/${SIDEBAR_ACTIONS.TOGGLE_MENU}`,
            }),
        },

        computed: {
            ...mapGetters({
                'GET_MENU_STATE': `${SIDEBAR_NAMESPACE}/${SIDEBAR_GETTERS.GET_MENU_STATE}`,
            }),
        },

        data() {
            return {
                state: false,
                options: [
                    {
                        name: 'Profile',
                        icon: 'person',
                    },
                    {
                        name: 'News',
                        icon: 'info',
                    },
                    {
                        name: 'Patreon',
                        icon: 'sentiment_satisfied_alt',
                    },
                ]
            }
        },

        components: {
            Button,
            Icon,
            Title,
        },
    }
</script>

<style scoped lang="scss">
    @import '../../../../css/colors.scss';

    .Sidebar {
        height: 35px;
        position: relative;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        background: linear-gradient($color-primary, $color-secondary);
        box-shadow: 0 0 10px 0 $color-sidebarShadow;
        z-index: 10000;

        &-title {
            margin: 0;
        }

        &-menu {
            display: block;
            position: absolute;
            top: 75px;
            left: 0;
            width: 100%;
            background-color: white;
            transform: translateY(-100%);
            transition: all 0.3s;
            z-index: 9999;

            &--open {
                transform: translateY(0);
                box-shadow: 0 0 10px 0 $color-sidebarShadow;
            }
        }

        &-menuList {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        &-menuListItem {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            cursor: pointer;
            transition: all 0.3s;
            color: $color-text;

            &:hover {
                background-color: #f5f5f5;
            }
        }

        &-menuListItemName {
            margin-left: 10px;
        }
    }
</style>

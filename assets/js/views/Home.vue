<template>
    <div class="LandingPage">
        <div class="LandingPage-headerContainer">
            <div class="LandingPage-header">
                <router-link to="/" class="LandingPage-headerLink">Negottium</router-link>
                <div>
                    <router-link to="/login" class="LandingPage-headerLink">Login</router-link>
                    <router-link to="/register" class="LandingPage-headerLink">Register</router-link>
                </div>
            </div>
        </div>

        <div class="LandingPage-bodyContainer">
            <div class="LandingPage-body">
                <div class="LandingPage-mainImage">
                    <img src="../../images/landing-page-main.svg">
                </div>
                <div class="LandingPage-mainSlogan">
                    <span>Organize Your Daily Life With The Help Of Negottium</span>
                    <div class="LandingPage-mainSloganAction">
                        <Button form green @click="toRegister">Get Started</Button>
                    </div>
                </div>
            </div>
        </div>

        <div class="LandingPage-footerContainer">
            <div class="LandingPage-footer">
                <span>Copyright © 2020 Negottium</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../components/Button';

    export default {
        methods: {
            toRegister() {
                this.$router.push('/register');
            },
        },

        components: {
            Button,
        },
    }
</script>

<style scoped lang="scss">
    @import '../../css/colors.scss';

    .LandingPage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;

        &-header {
            height: 100px;
            width: 70%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-white;
            position: relative;

            &Container {
                background: linear-gradient($color-primary, $color-secondary);
            }

            &Link {
                color: $color-white;
                text-decoration: none;
                margin: 0 20px;

                &:hover {
                    color: $color-text;
                }
            }
        }

        &-mainImage {
            position: absolute;
            top: 20%;
            left: 20px;
        }

        &-mainSlogan {
            font-size: 50px;
            font-weight: 600;
            z-index: 10000;
            width: 50%;
            color: $color-primary;
            text-align: center;
            display: flex;
            flex-direction: column;

            &Action {
                margin-top: 20px;
                display: flex;
                justify-content: center;
            }
        }

        &-body {
            width: 100%;
            flex-grow: 1;
            padding: 20px 30px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            &Container {
                display: flex;
                flex-grow: 1;
            }
        }

        &-footer {
            height: 100px;
            width: 70%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $color-white;

            &Container {
                background-color: #000000b8;
            }
        }
    }

    img {
        width: 75%;
    }
</style>

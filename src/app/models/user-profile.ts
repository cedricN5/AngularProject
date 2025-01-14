import { SocialLink } from "./social-link";

export interface UserProfile {
    image: string,
    fullname: string,
    location: string,
    links:SocialLink[],
}
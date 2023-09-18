import type { BlogPost, ResumeHeader, ResumeSection } from "src/types-api";
import _posts from "./_posts";
import _resume from "./_resume";

type FakeData = {
    posts: BlogPost[];
    resume: {
        header: ResumeHeader,
        sections: ResumeSection[]
    };
};

const fakeData: FakeData = {
    posts: _posts,
    resume: _resume,
};

export class DataApi {
    constructor () {}

    static getBlogPosts() {
        return fakeData.posts;
    }

    static getResume() {
        return fakeData.resume;
    }
}
import { IUser, IWiki, IWikiUser, WikiUserRole, WikiStatus, IDocument, IPagination } from "../models";
export declare type ICreateWikiDto = {
    name: string;
    description: string;
    cover: string;
};
export declare type IUpdateWikiDto = Partial<ICreateWikiDto>;
export declare type IWikiUserDto = {
    userName: string;
    userRole: WikiUserRole;
};
export declare type IShareWikiDto = {
    nextStatus: WikiStatus;
    publicDocumentIds?: IDocument["id"][];
    privateDocumentIds?: IDocument["id"][];
};
export declare type IWikiTocRelation = {
    id: IDocument["id"];
    parentDocumentId: IDocument["id"] | null;
};
export declare abstract class IWikiService {
    createLoading: boolean;
    createError: any;
    allWikis: any[];
    allWikisTotal: number;
    getAllWikisLoading: boolean;
    getAllWikisError: any;
    joinWikis: any[];
    joinWikisTotal: number;
    getJoinWikisLoading: boolean;
    getJoinWikisError: any;
    ownWikis: any[];
    ownWikisTotal: number;
    getOwnWikisLoading: boolean;
    getOwnWikisError: any;
    wikisDetail: Map<any, any>;
    getWikiLoading: boolean;
    getWikiError: any;
    updateWikiLoading: boolean;
    updateWikiError: any;
    deleteWikiLoading: boolean;
    deleteWikiError: any;
    wikisHomeDocument: Map<any, any>;
    getWikisHomeDocumentLoading: boolean;
    getWikisHomeDocumentError: any;
    wikiUsers: Map<any, any>;
    getWikiUsersLoading: boolean;
    getWikiUsersError: any;
    addWikiUserLoading: boolean;
    addWikiUserError: any;
    updateWikiUserLoading: boolean;
    updateWikiUserError: any;
    deleteWikiUserLoading: boolean;
    deleteWikiUserError: any;
    wikisDocuments: Map<any, any>;
    getWikisDocumentsLoading: boolean;
    getWikisDocumentsError: any;
    wikisTocs: Map<any, any>;
    getWikisTocsLoading: boolean;
    getWikisTocsError: any;
    updateWikisTocsLoading: boolean;
    updateWikisTocsError: any;
    shareWikiLoading: boolean;
    shareWikiError: any;
    publicWikisHomeDocuments: Map<any, any>;
    getPublictWikisHomeDocumentLoading: boolean;
    getPublicWikisHomeDocumentError: any;
    publicWikisTocs: Map<any, any>;
    getPublicWikisTocsLoading: boolean;
    getPublicWikisTocsError: any;
    publicWikisDetail: Map<any, any>;
    getPublicWikiLoading: boolean;
    getPublicWikiError: any;
    abstract createWiki(data: ICreateWikiDto, user?: IUser): Promise<IWiki>;
    abstract getUserAllWikis(pagination: IPagination, user?: IUser): Promise<{
        data: IWiki[];
        total: number;
    }>;
    abstract getUserOwnWikis(pagination: IPagination, user?: IUser): Promise<{
        data: IWiki[];
        total: number;
    }>;
    abstract getUserJoinWikis(pagination: IPagination, user?: IUser): Promise<{
        data: IWiki[];
        total: number;
    }>;
    abstract getWikiDetail(wikiId: IWiki["id"], user?: IUser): Promise<IWiki>;
    abstract updateWiki(wikiId: IWiki["id"], data: IUpdateWikiDto, user?: IUser): Promise<IWiki>;
    abstract deleteWiki(wikiId: IWiki["id"], user?: IUser): Promise<void>;
    abstract getWikiHomeDocument(wikiId: IWiki["id"], user?: IUser): Promise<IDocument>;
    abstract getWikiUsers(wikiId: IWiki["id"], user?: IUser): Promise<IWikiUser[]>;
    abstract addWikiUser(wikiId: IWiki["id"], data: IWikiUserDto, user?: IUser): Promise<IWikiUser>;
    abstract updateWikiUser(wikiId: IWiki["id"], data: IWikiUserDto, user?: IUser): Promise<IWikiUser>;
    abstract deleteWikiUser(wikiId: IWiki["id"], data: IWikiUserDto, user?: IUser): Promise<void>;
    abstract getWikiDocuments(wikiId: IWiki["id"], user?: IUser): Promise<IDocument[]>;
    abstract getWikiTocs(wikiId: IWiki["id"], user?: IUser): Promise<IDocument[]>;
    abstract updateWikiTocs(wikiId: IWiki["id"], relations: IWikiTocRelation[], user?: IUser): Promise<IDocument[]>;
    abstract shareWiki(wikiId: IWiki["id"], data: IShareWikiDto, user?: IUser): Promise<IWiki>;
    abstract getPublicWikiHomeDocument(wikiId: IWiki["id"]): Promise<IDocument>;
    abstract getPublicWikiTocs(wikiId: IWiki["id"]): Promise<IDocument[]>;
    abstract getPublicWikiDetail(wikiId: IWiki["id"]): Promise<IWiki>;
}

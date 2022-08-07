import { ClientOptions as BaseClientOptions, GuildMember, PermissionResolvable, GatewayIntentBits, Guild, Message, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, PermissionsBitField, Colors, LocaleString } from 'discord.js';
import { ConfigurationOptions } from 'i18n';
import { Client } from '../classes/Client.js';
export default Client;
export { PermissionsBitField, Client, GatewayIntentBits, Guild, GuildMember, Message, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, Colors };
export interface Local extends Partial<Record<LocaleString, string>> {
    'en-US': string;
    'es-ES': string;
}
export * from '../classes/Client.js';
export * from '../classes/Command.js';
export * from '../classes/Component.js';
export * from '../classes/OldCommand.js';
export * from '../handlers/CommandManager.js';
export * from '../handlers/OldCommandManager.js';
export * from '../handlers/ComponentManager.js';
export interface oldCommandData {
    name: string;
    description: string;
    category: string;
    alias: string[];
    user_permisions: PermissionResolvable[];
    bot_permisions: PermissionResolvable[];
    use: string;
    example: string;
    module: 'mts' | 'mpy' | 'mrs';
    type: 'slash' | 'command';
}
export interface PollDatabaseModel {
    guild: string;
    options: {
        name: string;
        value: string;
        votes: string[];
    }[];
    show_results: boolean;
    title: string;
    context: string;
    multiple_choices: boolean;
    author: string;
    block_choices: boolean;
    message: string;
    channel: string;
}
export interface SuggestChannelObject {
    channel: string;
    default: boolean;
    alias?: string;
}
export interface LogsChannelsDatabaseModel {
    message_update?: string;
    message_delete?: string;
    message_attachment?: string;
    invite?: string;
    member_update?: string;
    sanction?: string;
}
export interface GuildDataBaseModel {
    prefixes?: string[];
    suggest_channels?: SuggestChannelObject[];
    last_suggest?: number;
    logs_channels?: LogsChannelsDatabaseModel;
    premium?: boolean;
    birthday?: {
        channel?: string;
        message?: string;
    };
    blacklisted_words?: string[];
    disabled_channels?: string[];
    keep_roles?: boolean;
    emoji_analisis_enabled?: boolean;
    emoji_statistics?: any;
    autoroles?: {
        [key: string]: string[];
    };
}
export interface ClientConstants {
    newServerLogChannel: string;
    imgChannel: string;
    errorChannel: string;
    jsDiscordRoll: string;
}
export interface ClientOptions extends BaseClientOptions {
    firebaseToken?: any;
    routes: {
        commands: string;
        oldCommands: string;
        events: string;
        components: string;
    };
    i18n: ConfigurationOptions;
}
export declare type anyFunction = (msg: string, k?: any) => any;

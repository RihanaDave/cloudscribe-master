﻿// Copyright (c) Source Tree Solutions, LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Author:					Joe Audette
// Created:					2014-12-09
// Last Modified:			2018-05-26
// 

using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace cloudscribe.Core.Models
{
    public static class ModelExtensions
    {
        public static string StartingSegment(this string requestPath)
        {
            if (string.IsNullOrEmpty(requestPath)) return requestPath;
            if (!requestPath.Contains("/")) return requestPath;

            var segments = requestPath.SplitOnCharAndTrim('/');
            return segments.FirstOrDefault();
        }

        public static List<string> SplitOnCharAndTrim(this string s, char c)
        {
            List<string> list = new List<string>();
            if (string.IsNullOrWhiteSpace(s)) { return list; }

            string[] a = s.Split(c);
            foreach (string item in a)
            {
                if (!string.IsNullOrWhiteSpace(item)) { list.Add(item.Trim()); }
            }

            return list;
        }

        public static string ToInvariantString(this int i)
        {
            return i.ToString(CultureInfo.InvariantCulture);
        }

        public static string ToInvariantString(this float i)
        {
            return i.ToString(CultureInfo.InvariantCulture);
        }

        public static List<string> SplitOnChar(this string s, char c)
        {
            List<string> list = new List<string>();
            if (string.IsNullOrWhiteSpace(s)) { return list; }

            string[] a = s.Split(c);
            foreach (string item in a)
            {
                if (!string.IsNullOrWhiteSpace(item)) { list.Add(item); }
            }

            return list;
        }

        public static bool IsDeletable(this ISiteRole role, string undeletableRolesSemiColonSeparated)
        {
            List<string> rolesThatCannotBeDelete = undeletableRolesSemiColonSeparated.SplitOnChar(';');
            return role.IsDeletable(rolesThatCannotBeDelete);
        }

        public static bool IsDeletable(this ISiteRole role, List<string> rolesThatCannotBeDeleted)
        {
            if (role.RoleName == "Administrators") { return false; }

            if (role.NormalizedRoleName == "Administrators") { return false; }

            if (rolesThatCannotBeDeleted != null)
            {
                foreach (string roleName in rolesThatCannotBeDeleted)
                {
                    if (role.NormalizedRoleName == roleName) { return false; }
                    if (role.RoleName == roleName) { return false; }
                }
            }

            return true;
        }

        public static bool HasAnySocialAuthEnabled(this ISiteContext site)
        {
            if ((!string.IsNullOrWhiteSpace(site.MicrosoftClientId)) && (!string.IsNullOrWhiteSpace(site.MicrosoftClientSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.FacebookAppId)) && (!string.IsNullOrWhiteSpace(site.FacebookAppSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.GoogleClientId)) && (!string.IsNullOrWhiteSpace(site.GoogleClientSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.TwitterConsumerKey)) && (!string.IsNullOrWhiteSpace(site.TwitterConsumerSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.OidConnectAppId)) && (!string.IsNullOrWhiteSpace(site.OidConnectAppSecret)) && (!string.IsNullOrWhiteSpace(site.OidConnectAuthority))) return true;

            return false;
        }

        public static bool HasAnySocialAuthEnabled(this ISiteSettings site)
        {
            if ((!string.IsNullOrWhiteSpace(site.MicrosoftClientId)) && (!string.IsNullOrWhiteSpace(site.MicrosoftClientSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.FacebookAppId)) && (!string.IsNullOrWhiteSpace(site.FacebookAppSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.GoogleClientId)) && (!string.IsNullOrWhiteSpace(site.GoogleClientSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.TwitterConsumerKey)) && (!string.IsNullOrWhiteSpace(site.TwitterConsumerSecret))) return true;
            if ((!string.IsNullOrWhiteSpace(site.OidConnectAppId)) && (!string.IsNullOrWhiteSpace(site.OidConnectAppSecret)) && (!string.IsNullOrWhiteSpace(site.OidConnectAuthority))) return true;

            return false;
        }

        public static bool SmtpIsConfigured(this ISiteSettings site)
        {
            if (!string.IsNullOrEmpty(site.SmtpServer)) return true;

            return false;
        }

        public static bool SmsIsConfigured(this ISiteContext site)
        {
            if (!string.IsNullOrEmpty(site.SmsClientId)) return true;

            return false;
        }

        public static bool SmsIsConfigured(this ISiteSettings site)
        {
            if (!string.IsNullOrEmpty(site.SmsClientId)) return true;

            return false;
        }
    }
}

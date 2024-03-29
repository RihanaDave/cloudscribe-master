﻿// Copyright (c) Source Tree Solutions, LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.
// Author:					Joe Audette
// Created:					2015-07-22
// Last Modified:			2018-04-02
// 

using cloudscribe.Core.Models;
using System.Threading.Tasks;

namespace cloudscribe.Core.Web.Components.Messaging
{
    public interface ISiteMessageEmailSender
    {
        Task SendAccountConfirmationEmailAsync(
            ISiteContext siteSettings,
            string toAddress, 
            string subject, 
            string confirmationUrl,
            string confirmCode);

        Task SendEmailChangedConfirmationEmailAsync(
            ISiteContext siteSettings,
            string newEmail,
            string oldEmail,
            string subject,
            string siteUrl,
            string confirmationUrl,
            string confirmToken);

        Task SendEmailChangedNotificationEmailsAsync(
            ISiteContext siteSettings,
            string newEmail,
            string oldEmail,
            string subject,
            string siteUrl);

        Task SendAccountExistsEmailAsync(
            ISiteContext siteSettings,
            string toAddress,
            string subject,
            string resetUrl,
            string loginUrl,
            string confirmUrl,
            bool stillNeedsApproval);

        Task SendNewExternalLoginMappingEmailAsync(
            ISiteContext siteSettings,
            string toAddress,
            string subject,
            string providerKey,
            string providerDisplayName,
            string manageExternalLoginsUrl
          );

        Task SendSecurityCodeEmailAsync(
            ISiteContext siteSettings,
            string toAddress,
            string subject,
            string securityCode);

        Task SendInitialPasswordEmailAsync(
            ISiteContext siteSettings,
            string toAddress,
            string subject,
            string resetUrl);

        Task SendPasswordResetEmailAsync(
            ISiteContext siteSettings,
            string toAddress,
            string subject,
            string resetUrl);

        Task AccountPendingApprovalAdminNotification(
            ISiteContext siteSettings,
            IUserContext user);

        Task NewAccountAdminNotification(
            ISiteContext siteSettings,
            IUserContext user);

        Task SendAccountApprovalNotificationAsync(
            ISiteContext siteSettings,
            string toAddress,
            string subject,
            string loginUrl);

        Task SendSiteMessage(
            ISiteContext siteSettings,
            SiteMessageModel model,
            string baseUrl);
    }
}

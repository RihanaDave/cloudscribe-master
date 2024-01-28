using System;
using System.Collections.Generic;

namespace cloudscribe.Web.Common.Setup
{
    [Obsolete("this will be removed from cloiudscribe.Web.Common in a future release, please use the version in the new package cloudscribe.Versioning")]
    public interface IVersionProviderFactory
    {
        IEnumerable<IVersionProvider> VersionProviders { get; }
        IVersionProvider Get(string name);

    }
}
